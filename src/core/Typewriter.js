import raf, { cancel as cancelRaf } from 'raf';
import {
  doesStringContainHTMLTag,
  getDOMElementFromString,
  getRandomInteger,
  addStyles,
} from './../utils';
import {
  EVENT_NAMES,
  VISIBLE_NODE_TYPES,
  STYLES,
} from './constants';

class Typewriter {
  state = {
    cursorAnimation: null,
    lastFrameTime: null,
    pauseUntil: null,
    eventQueue: [],
    eventLoop: null,
    eventLoopPaused: false,
    reverseCalledEvents: [],
    calledEvents: [],
    visibleNodes: [],
    initialOptions: null,
    elements: {
      container: null,
      wrapper: document.createElement('span'),
      cursor: document.createElement('span'),
    },
    lastCharacterTyped: null,
  }

  options = {
    strings: null,
    cursor: '|',
    delay: 'natural',
    pauseFor: 1500,
    deleteSpeed: 'natural',
    loop: false,
    autoStart: false,
    devMode: false,
    skipAddStyles: false,
    wrapperClassName: 'Typewriter__wrapper',
    cursorClassName: 'Typewriter__cursor',
    stringSplitter: null,
    onCreateTextNode: null,
    onRemoveNode: null,
  }

  constructor(container, options) {
    if(container) {
      if(typeof container === 'string') {
        const containerElement = document.querySelector(container);
  
        if(!containerElement) {
          throw new Error('Could not find container element');
        }
  
        this.state.elements.container = containerElement;
      } else {
        this.state.elements.container = container;
      }
    }

    if(options) {
      this.options = {
        ...this.options,
        ...options
      };
    }

    // Make a copy of the options used to reset options when looping
    this.state.initialOptions = { ...this.options };

    this.init();
  }

  init() {
    this.setupWrapperElement();
    
    this.addEventToQueue(EVENT_NAMES.CHANGE_CURSOR, { cursor: this.options.cursor }, true);
    //this.addEventToQueue(EVENT_NAMES.REMOVE_ALL, null, true);

    if(window && !window.___TYPEWRITER_JS_STYLES_ADDED___ && !this.options.skipAddStyles) {
      addStyles(STYLES);
      window.___TYPEWRITER_JS_STYLES_ADDED___ = true;
    }

    if(this.options.autoStart === true && this.options.strings) {
      this.typeOutAllStrings().start();
		}
  }

  /**
   * Replace all child nodes of provided element with
   * state wrapper element used for typewriter effect
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  setupWrapperElement = () => {
    if(!this.state.elements.container) {
      return
    }

    this.state.elements.wrapper.className = this.options.wrapperClassName;
    this.state.elements.cursor.className = this.options.cursorClassName;

    this.state.elements.cursor.innerHTML = this.options.cursor;
    this.state.elements.container.innerHTML = '';

    this.state.elements.container.appendChild(this.state.elements.wrapper);
    this.state.elements.wrapper.appendChild(this.state.elements.cursor);

    this.state.visibleNodes.push(this.state.elements.cursor);
  }

  /**
   * Start typewriter effect
   */
  start = () => {
    this.state.eventLoopPaused = false;
    this.runEventLoop();

    return this;
  }

  /**
   * Pause the event loop
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  pause = () => {
    this.state.eventLoopPaused = true;

    return this;
  }

  /**
   * Destroy current running instance
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  stop = () => {
    if(this.state.eventLoop) {
      cancelRaf(this.state.eventLoop);
      this.state.eventLoop = null;
    }

    return this;
  }

  /**
   * Add pause event to queue for ms provided
   *
   * @param {Number} ms Time in ms to pause for
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  pauseFor = (ms) => {
    this.addEventToQueue(EVENT_NAMES.PAUSE_FOR, { ms });

    return this;
  }

  /**
   * Start typewriter effect by typing
   * out all strings provided
   *
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  typeOutAllStrings = () => {
    if(typeof this.options.strings === 'string') {
      this.typeString(this.options.strings)
        .pauseFor(this.options.pauseFor);
      return this;
    }

    this.options.strings.forEach(string => {
      this.typeString(string)
        .pauseFor(this.options.pauseFor)
        .deleteAll(this.options.deleteSpeed);
    });

    return this;
  }

  /**
   * Adds string characters to event queue for typing
   *
   * @param {String} string String to type
   * @param {HTMLElement} node Node to add character inside of
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  typeString = (string, node = null) => {
    if(doesStringContainHTMLTag(string)) {
      return this.typeOutHTMLString(string, node);
    }

    if(string) {
      const { stringSplitter } = this.options || {};
      const characters = typeof stringSplitter === 'function' ? stringSplitter(string) : string.split('');
      this.typeCharacters(characters, node);
    }

    return this;
  }

  /**
   * Adds entire strings to event queue for paste effect
   *
   * @param {String} string String to paste
   * @param {HTMLElement} node Node to add string inside of
   * @return {Typewriter}
   *
   * @author Luiz Felicio <unifelicio@gmail.com>
   */
  pasteString = (string, node = null) => {
    if(string) {
      this.addEventToQueue(EVENT_NAMES.PASTE_STRING, { character: string, node });
    }
    return this;
  }

  /**
   * Type out a string which is wrapper around HTML tag
   *
   * @param {String} string String to type
   * @param {HTMLElement} parentNode Node to add inner nodes to
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  typeOutHTMLString = (string, parentNode = null) => {
    const childNodes = getDOMElementFromString(string);

    if(childNodes.length > 0 ) {
      for(let i = 0; i < childNodes.length; i++) {
        const node = childNodes[i];
        const nodeHTML = node.innerHTML;

        if(node && node.nodeType !== 3) {
          // Reset innerText of HTML element
          node.innerHTML = '';

          // Add event queue item to insert HTML tag before typing characters
          this.addEventToQueue(EVENT_NAMES.ADD_HTML_TAG_ELEMENT, {
            node,
            parentNode,
          });
          this.typeString(nodeHTML, node);
        } else {
          if(node.textContent) {
            this.typeString(node.textContent, parentNode);
          }
        }
      }
    }
    return this;
  }
  
    /**
   * Type out a string which is wrapper around HTML tag
   *
   * @param {String} string String to type
   * @param {HTMLElement} parentNode Node to add inner nodes to
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
     htmlPasteToNodes = (string, parentNode = null) => {

      const childNodes = getDOMElementFromString(string);
      const nodesToAdd = []

      if(childNodes.length > 0 ) {
        for(let i = 0; i < childNodes.length; i++) {
          const node = childNodes[i];
          const nodeHTML = node.innerHTML;
  
          if(node && node.nodeType !== 3) {
            // Reset innerText of HTML element
            node.innerHTML = '';
  
            // Add event queue item to insert HTML tag before typing characters
    
            nodesToAdd.push({
              type: VISIBLE_NODE_TYPES.HTML_TAG,
              node: node,
              parentNode: parentNode,
            })

            nodesToAdd.push(...this.htmlPasteToNodes(nodeHTML,node))

          }
           else {
            if(node.textContent) {
              //pasteEffect ? this.pasteString(node.textContent, parentNode) :  this.typeString(node.textContent, parentNode);
            
              //Simply text content

           
              nodesToAdd.push(...node.textContent.split("").map(val =>{
                return {
                  type: VISIBLE_NODE_TYPES.TEXT_NODE,
                  node: val,
                  parentNode: parentNode
                }
              }));
            }
          }
        }
      }
      return nodesToAdd;
    }
  

  /**
   * Delete the last X characters.
   * Opposed to using the deleteAll event still having a small delay depending on the event loop ticker,
   * using clear removes the items immediately.
   *
   * @param {Number} amount the number of characters to delete. A value of 0 or smaller will remove all written characters
   * @param {Boolean} callOnRemove whether to call the onRemove callback for each node or not. Defaults to false
   * @return {Typewriter}
   *
   * @author Kilian Brachtendorf <kilian@brachtendorf.dev>
   */
  clear = (amount = 0, callOnRemove = false) => {
    this.addEventToQueue(EVENT_NAMES.CLEAR, { amount, callOnRemove });
    return this;
  };

  /**
   * Add delete all characters to event queue
   *
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  deleteAll = (speed = 'natural') => {
    this.addEventToQueue(EVENT_NAMES.REMOVE_ALL, { speed });
    return this;
  }

  /**
   * Change delete speed
   *
   * @param {Number} speed Speed to use for deleting characters
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  changeDeleteSpeed = (speed) => {
    if(!speed) {
      throw new Error('Must provide new delete speed');
    }

    this.addEventToQueue(EVENT_NAMES.CHANGE_DELETE_SPEED, { speed });

    return this;
  }

  /**
   * Change delay when typing
   *
   * @param {Number} delay Delay when typing out characters
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  changeDelay = (delay) => {
    if(!delay) {
      throw new Error('Must provide new delay');
    }

    this.addEventToQueue(EVENT_NAMES.CHANGE_DELAY, { delay });

    return this;
  }

  /**
   * Change cursor
   *
   * @param {String} character/string to represent as cursor
   * @return {Typewriter}
   *
   * @author Y.Paing <ye@y3p.io>
   */
  changeCursor = (cursor) => {
    if(!cursor) {
      throw new Error('Must provide new cursor');
    }

    this.addEventToQueue(EVENT_NAMES.CHANGE_CURSOR, { cursor });

    return this;
  }

  /**
   * Add delete character to event queue for amount of characters provided
   *
   * @param {Number} amount Number of characters to remove
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  deleteChars = (amount) => {
    if(!amount) {
      throw new Error('Must provide amount of characters to delete');
    }

    for(let i = 0; i < amount; i++) {
      this.addEventToQueue(EVENT_NAMES.REMOVE_CHARACTER);
    }

    return this;
  }

  /**
   * Add an event item to call a callback function
   *
   * @param {cb}      cb        Callback function to call
   * @param {Object}  thisArg   thisArg to use when calling function
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  callFunction = (cb, thisArg) => {
    if(!cb || typeof cb !== 'function') {
      throw new Error('Callback must be a function');
    }

    this.addEventToQueue(EVENT_NAMES.CALL_FUNCTION, { cb, thisArg });

    return this;
  }

  /**
   * Add type character event for each character
   *
   * @param {Array} characters Array of characters
   * @param {HTMLElement} node Node to add character inside of
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  typeCharacters = (characters, node = null) => {
    if(!characters || !Array.isArray(characters)) {
      throw new Error('Characters must be an array');
    }

    characters.forEach(character => {
      this.addEventToQueue(EVENT_NAMES.TYPE_CHARACTER, { character, node });
    });

    return this;
  }

  changeCursorPosition = (position,delay = 0) => {
    this.addEventToQueue(EVENT_NAMES.CHANGE_CURSOR_POSITION,{position,delay})
    return this;
  }

  /**
   * Add remove character event for each character
   *
   * @param {Array} characters Array of characters
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  removeCharacters = (characters) => {
    if(!characters || !Array.isArray(characters)) {
      throw new Error('Characters must be an array');
    }

    characters.forEach(() => {
      this.addEventToQueue(EVENT_NAMES.REMOVE_CHARACTER);
    });

    return this;
  }

  /**
   * Add an event to the event queue
   *
   * @param {String}  eventName Name of the event
   * @param {Object}  eventArgs Arguments to pass to event callback
   * @param {Boolean} prepend   Prepend to beginning of event queue
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  addEventToQueue = (eventName, eventArgs, prepend = false) => {
    return this.addEventToStateProperty(
      eventName,
      eventArgs,
      prepend,
      'eventQueue'
    );
  }

  /**
   * Add an event to reverse called events used for looping
   *
   * @param {String}  eventName Name of the event
   * @param {Object}  eventArgs Arguments to pass to event callback
   * @param {Boolean} prepend   Prepend to beginning of event queue
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  addReverseCalledEvent = (eventName, eventArgs, prepend = false) => {
    const { loop } = this.options;

    if(!loop) {
      return this;
    }

    return this.addEventToStateProperty(
      eventName,
      eventArgs,
      prepend,
      'reverseCalledEvents'
    );
  }

  /**
   * Add an event to correct state property
   *
   * @param {String}  eventName Name of the event
   * @param {Object}  eventArgs Arguments to pass to event callback
   * @param {Boolean} prepend   Prepend to beginning of event queue
   * @param {String}  property  Property name of state object
   * @return {Typewriter}
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  addEventToStateProperty = (eventName, eventArgs, prepend = false, property) => {
    const eventItem = {
      eventName,
      eventArgs: eventArgs || {},
    };

    if(prepend) {
      this.state[property] = [
        eventItem,
        ...this.state[property],
      ];
    } else {
      this.state[property] = [
        ...this.state[property],
        eventItem,
      ];
    }

    return this;
  }

  /**
   * Run the event loop and do anything inside of the queue
   *
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  runEventLoop = () => {
    if(!this.state.lastFrameTime) {
      this.state.lastFrameTime = Date.now();
    }

    // Setup variables to calculate if this frame should run
    const nowTime = Date.now();
    const delta = nowTime - this.state.lastFrameTime;

    if(!this.state.eventQueue.length) {
      if(!this.options.loop) {
        return;
      }

      // Reset event queue if we are looping
      this.state.eventQueue = [...this.state.calledEvents];
      this.state.calledEvents = [];
      this.options = {...this.state.initialOptions};
    }

    // Request next frame
    this.state.eventLoop = raf(this.runEventLoop);

    // Check if event loop is paused
    if(this.state.eventLoopPaused) {
      return;
    }

    // Check if state has pause until time
    if(this.state.pauseUntil) {
      // Check if event loop should be paused
      if(nowTime < this.state.pauseUntil) {
        return;
      }

      // Reset pause time
      this.state.pauseUntil = null;
    }

    // Make a clone of event queue
    const eventQueue = [...this.state.eventQueue];

    // Get first event from queue
    const currentEvent = eventQueue.shift();

    // Setup delay variable
    let delay = 0;

    // Check if frame should run or be
    // skipped based on fps interval
    if(
      currentEvent.eventName === EVENT_NAMES.REMOVE_LAST_VISIBLE_NODE ||
      currentEvent.eventName === EVENT_NAMES.REMOVE_CHARACTER
    ) {
      delay = this.options.deleteSpeed === 'natural' ? getRandomInteger(40, 80) : this.options.deleteSpeed;
    }else if(currentEvent.eventName === EVENT_NAMES.TYPE_CHARACTER){


      // const leftPinkySpeed = 120;
      // const leftRingSpeed = 230;
      // const leftMiddleSpeed = 160;
      // const leftIndexSpeed = 200;
      // const rightIndexSpeed = 135;
      // const rightMiddleSpeed = 130;
      // const rightRingSpeed = 190;
      // const thumb = 100;


      // //Only valid for german local, special characters might be shifted
      // const obs = [];
      // obs.push({
      //   lookupSet: new Set(["1","q","a","z","^","@"]),
      //   speed: leftPinkySpeed
      // },{
      //   lookupSet: new Set(["2","w","s","x"]),
      //   speed: leftRingSpeed
      // },{
      //   lookupSet: new Set(["3","e","d","c","r"]),
      //   speed: leftMiddleSpeed
      // },{
      //   lookupSet: new Set(["4","5","t","f","g","v","b",]),
      //   speed: leftIndexSpeed
      // },{
      //   lookupSet: new Set([" "]),
      //   speed: thumb
      // },{
      //   lookupSet: new Set(["6","7","u","j","h","n","m","z"]),
      //   speed: rightIndexSpeed
      // },{
      //   lookupSet: new Set(["8","i","k",","]),
      //   speed: thumb
      // },{
      //   lookupSet: new Set([" "]),
      //   speed: thumb
      // },{
      //   lookupSet: new Set([" "]),
      //   speed: thumb
      // },{
      //   lookupSet: new Set([" "]),
      //   speed: thumb
      // },
      // {
      //   lookupSet: new Set(["@","€"]),
      //   speed: leftPinkySpeed
      // }
      // )

      // const resolveTypeSpeed= (character) =>{

      //   if(true){

      //   }
      //   else{
      //     //Special characters usually require an additional press with shift. This takes a bit longer
      //   }
        

      // }

      if(this.options.delay === 'natural'){
        //White spaces usually have a slightly higher delay
        if(currentEvent.eventArgs.character === " "){
          delay = getRandomInteger(180, 190)
        }else if(this.state.lastCharacterTyped == currentEvent.eventArgs.character){
          delay = getRandomInteger(90, 100)
        }else{
          delay = getRandomInteger(120, 170)
        }
      }else{
        delay = this.options.delay
      }
    }

    if(delta <= delay) {
      return;
    }

    // Get current event args
    const { eventName, eventArgs } = currentEvent;

    this.logInDevMode({ currentEvent, state: this.state, delay });

    // Run item from event loop
    switch(eventName) {
      case EVENT_NAMES.PASTE_STRING:

      const { character, node } = eventArgs;

      const nodesToAdd = this.htmlPasteToNodes(character);

      const nodesAdded = [];

      //Get the last known element before the cursor.
      nodesToAdd.forEach(node =>{

        let nodeToAdd = node.type === VISIBLE_NODE_TYPES.TEXT_NODE ? document.createTextNode(node.node) : node.node;
         
          //If a parent is specified means that is belongs to an html tag
          if(node.parentNode){
            node.parentNode.appendChild(nodeToAdd);
          }else{
            //Add it to the html wrapper element instead... //But at the correct position
            this.state.elements.wrapper.insertBefore(nodeToAdd,this.state.elements.cursor);
          }
          nodesAdded.push({
            type: node.type,
            node: nodeToAdd,
            parentNode: node.parentNode ? node.parentNode : this.state.elements.wrapper
          })
      });

      const splitIndex = this.state.visibleNodes.indexOf(this.state.elements.cursor);

      //This should always be the case since the cursor would be the last element anyways
      const numOfElements = this.state.visibleNodes.length;
      if(splitIndex > 0){
        this.state.visibleNodes = [
          ...this.state.visibleNodes.slice(0,splitIndex),
          ...nodesAdded,
          ...this.state.visibleNodes.slice(splitIndex,numOfElements)
        ]
      }else if(splitIndex == 0){
        this.state.visibleNodes = [
          ...nodesAdded,
          ...this.state.visibleNodes
        ]
      }
      break;

      case EVENT_NAMES.TYPE_CHARACTER: {
        const { character, node } = eventArgs
        const textNode = document.createTextNode(character);

        let textNodeToUse = textNode

        if(this.options.onCreateTextNode && typeof this.options.onCreateTextNode === 'function') {
          textNodeToUse = this.options.onCreateTextNode(character, textNode)
        }

        if(textNodeToUse) {
          if(node) {
            node.appendChild(textNodeToUse);
          } else {
            this.state.elements.wrapper.insertBefore(textNodeToUse,this.state.elements.cursor);
          }
        }

        //O(n).... we should count it ourselves instead.
        let splitIndex = this.state.visibleNodes.indexOf(this.state.elements.cursor);

        this.state.visibleNodes.splice(splitIndex,0,{
          type: VISIBLE_NODE_TYPES.TEXT_NODE,
          character,
          node: textNodeToUse,
          parentNode: node || this.state.elements.wrapper
        });

        this.state.lastCharacterTyped = character;
        break;
      }

      case EVENT_NAMES.REMOVE_CHARACTER: {
        eventQueue.unshift({
          eventName: EVENT_NAMES.REMOVE_LAST_VISIBLE_NODE,
          eventArgs: {},
        });
        break;
      }

      case EVENT_NAMES.PAUSE_FOR: {
        const { ms } = currentEvent.eventArgs;
        this.state.pauseUntil = Date.now() + parseInt(ms);
        break;
      }

      case EVENT_NAMES.CALL_FUNCTION: {
        const { cb, thisArg } = currentEvent.eventArgs;

        cb.call(thisArg, {
          elements: this.state.elements,
        });

        break;
      }

      case EVENT_NAMES.ADD_HTML_TAG_ELEMENT: {

        const { node, parentNode } = currentEvent.eventArgs;

        if(!parentNode) {
          this.state.elements.wrapper.insertBefore(node,this.state.elements.cursor);
        } else {
          parentNode.appendChild(node);
        }

        const cursorPos = this.state.visibleNodes.indexOf(this.state.elements.cursor);

        this.state.visibleNodes.splice(cursorPos,0,{
          type: VISIBLE_NODE_TYPES.HTML_TAG,
          node,
          parentNode: parentNode || this.state.elements.wrapper,
        })

        //We need to add it here correctly as well
        // this.state.visibleNodes = [
        //   ...this.state.visibleNodes,
        //   {
        //     type: VISIBLE_NODE_TYPES.HTML_TAG,
        //     node,
        //     parentNode: parentNode || this.state.elements.wrapper,
        //   },
        // ];


        break;
      }

      case EVENT_NAMES.REMOVE_ALL: {
        const { visibleNodes } = this.state;
        const { speed } = eventArgs;
        const removeAllEventItems = [];

        // Change speed before deleting
        if(typeof speed === "number") {

          if(speed <= 0){
            this.logInDevMode("If you intend to delete the entire text without noticeable delay take a look at the clear() function");
          }
          removeAllEventItems.push({
            eventName: EVENT_NAMES.CHANGE_DELETE_SPEED,
            eventArgs: { speed, temp: true },
          });
        }

        
        //TODO events will be dropped since we are adding too many events (additional html elements);
        const cursorOffset = this.state.visibleNodes.indexOf(this.state.elements.cursor);

        for(let i = 0; i < cursorOffset; i++) {
          removeAllEventItems.push({
            eventName: EVENT_NAMES.REMOVE_LAST_VISIBLE_NODE,
            eventArgs: {},
          });
        }

        // Change speed back to normal after deleting
        if(typeof speed === "number") {
          removeAllEventItems.push({
            eventName: EVENT_NAMES.CHANGE_DELETE_SPEED,
            eventArgs: { speed: this.options.deleteSpeed, temp: true },
          });
        }
        eventQueue.unshift(...removeAllEventItems);
        break;
      }

      case EVENT_NAMES.REMOVE_LAST_VISIBLE_NODE: {
      
        if(this.state.visibleNodes.length) {

          //Actually do not remove the last added node but the node just before the cursor
          const curIndex = this.state.visibleNodes.indexOf(this.state.elements.cursor) - 1;

          //Cursor at beginning of the row. There is nothing to delete
          if(curIndex < 0){
            break;
          }

          const { type, node, character, parentNode } = this.state.visibleNodes.splice(curIndex,1)[0];//this.state.visibleNodes.pop();

          if(this.options.onRemoveNode && typeof this.options.onRemoveNode === 'function') {
            this.options.onRemoveNode({
              node,
              character,
            })
          }

          if(node) {
            node.parentNode.removeChild(node);
          }

          //This is a text node which belongs to an HTML node
          if(parentNode && parentNode != this.state.elements.wrapper && parentNode.childNodes.length == 0 ){
            eventQueue.unshift({
              eventName: EVENT_NAMES.REMOVE_LAST_VISIBLE_NODE,
              eventArgs: {},
            });
          }
        }
        break;
      }

      case EVENT_NAMES.CLEAR: {

        //Clear all nodes without delay.
        //Instead of creating a new event for each operation we perform it immediately as the event loop has it's own delay.
        const { visibleNodes } = this.state;
        const copiedNodes = [...visibleNodes];

        //How many elements do we want to delete?
        const { amount, callOnRemove } = eventArgs;

        if (copiedNodes.length > 0) {

          //Check cursor offset first. (these are the max number of elements we could possibly delete)
          const cursorOffset = this.state.visibleNodes.indexOf(this.state.elements.cursor);

          //Those will always be kept because they are behind the cursor
          const tailNodes = copiedNodes.splice(cursorOffset,copiedNodes.length - cursorOffset);
          
          //Removal is counted against actual text nodes and not html tags, thus we need to count the actual number
          const headTextNodes = copiedNodes.filter(node => node.type === VISIBLE_NODE_TYPES.TEXT_NODE);

          const numOfNodesToDelete = amount && amount > 0 && amount < headTextNodes.length ? amount : headTextNodes.length;

          const removeParentNodeIfNecessary = (parent) => {          
            if(parent != this.state.elements.wrapper && parent.childNodes.length == 0){
              //pop the parent fromt he stack
              if(copiedNodes.pop().node !== parent){
                console.error("Objects should be identical");
              }
              const nextParent = parent.parentNode;
              nextParent.removeChild(parent);
              removeParentNodeIfNecessary(nextParent);
            }
          }
          
          //Iterate backwards as html nodes are added first
          for (let i = 0; i < numOfNodesToDelete;) {

            if(copiedNodes.length > 0){
              const { type, node, character } = copiedNodes.pop();

              // if(callOnRemove && this.options.onRemoveNode && typeof this.options.onRemoveNode === 'function'){
              //   this.options.onRemoveNode(node, character);
              // }

              //Make a copy or else we loose the reference after removing
              const parent = node.parentNode;

              if(parent){
                try{
                  parent.removeChild(node);
                  }catch(err){
                    console.error(err);
                  }
                  //Do not count html nodes
                  if(type === VISIBLE_NODE_TYPES.TEXT_NODE){
                    i++;
                    removeParentNodeIfNecessary(parent);
                  }
              }
            }
          }
          this.state.visibleNodes = [...copiedNodes,...tailNodes]
        }
        break;
      }

      case EVENT_NAMES.CHANGE_CURSOR_POSITION:{
        
        const {position} = eventArgs;

        if(typeof position === "number"){

          let insertPos = 0;
          
          //Jump behind and skip html tags
          for(let i = 0; i < this.state.visibleNodes.length; i++){
            if(insertPos == position){
              insertPos = i;
              break;
            }
            if(this.state.visibleNodes[i].type == VISIBLE_NODE_TYPES.TEXT_NODE){
              insertPos++;
            }
          }
          
          this.state.visibleNodes[insertPos].node.before(this.state.elements.cursor);

          //Rearange the cursor in the visible nodes array

          //Remove the cursor from it's current position

          const actualCursorPosition = this.state.visibleNodes.indexOf(this.state.elements.cursor);
          this.state.visibleNodes.splice(actualCursorPosition,1);

          //Insert it at the correct destination
          this.state.visibleNodes.splice(insertPos,0,this.state.elements.cursor);
        }
        break;
      }

      case EVENT_NAMES.CHANGE_DELETE_SPEED: {
        this.options.deleteSpeed = currentEvent.eventArgs.speed;
        break;
      }

      case EVENT_NAMES.CHANGE_DELAY: {
        this.options.delay = currentEvent.eventArgs.delay;
        break;
      }

      case EVENT_NAMES.CHANGE_CURSOR: {
        this.options.cursor = currentEvent.eventArgs.cursor;
        this.state.elements.cursor.innerHTML = currentEvent.eventArgs.cursor;
        break;
      }

      default: {
        break;
      }
    }

    // Add que item to called queue if we are looping
    if(this.options.loop) {
      if(
        currentEvent.eventName !== EVENT_NAMES.REMOVE_LAST_VISIBLE_NODE &&
        !(currentEvent.eventArgs && currentEvent.eventArgs.temp)
      ) {
        this.state.calledEvents = [
          ...this.state.calledEvents,
          currentEvent
        ];
      }
    }

    // Replace state event queue with cloned queue
    this.state.eventQueue = eventQueue;

    // Set last frame time so it can be used to calculate next frame
    this.state.lastFrameTime = nowTime;
  }

  /**
   * Log a message in development mode
   *
   * @param {Mixed} message Message or item to console.log
   * @author Tameem Safi <tamem@safi.me.uk>
   */
  logInDevMode(message) {
    if(this.options.devMode) {
      console.log(message);
    }
  }
}

export default Typewriter;
