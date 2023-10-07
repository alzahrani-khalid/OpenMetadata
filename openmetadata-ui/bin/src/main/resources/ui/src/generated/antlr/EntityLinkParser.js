// Generated from /Users/khalidalzahrani/coding/OpenMetadata/openmetadata-ui/src/main/resources/ui/../../../../../openmetadata-spec/src/main/antlr4/org/openmetadata/schema/EntityLink.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import EntityLinkListener from './EntityLinkListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\t\u0017\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0006\u0002\n\n\u0002\r\u0002\u000e\u0002\u000b",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003\u0015\n\u0003\u0003\u0003\u0002\u0002\u0004",
    "\u0002\u0004\u0002\u0002\u0002\u0018\u0002\u0006\u0003\u0002\u0002\u0002",
    "\u0004\u0014\u0003\u0002\u0002\u0002\u0006\t\u0007\u0003\u0002\u0002",
    "\u0007\b\u0007\u0007\u0002\u0002\b\n\u0005\u0004\u0003\u0002\t\u0007",
    "\u0003\u0002\u0002\u0002\n\u000b\u0003\u0002\u0002\u0002\u000b\t\u0003",
    "\u0002\u0002\u0002\u000b\f\u0003\u0002\u0002\u0002\f\r\u0003\u0002\u0002",
    "\u0002\r\u000e\u0007\u0004\u0002\u0002\u000e\u000f\u0007\u0002\u0002",
    "\u0003\u000f\u0003\u0003\u0002\u0002\u0002\u0010\u0015\u0007\u0005\u0002",
    "\u0002\u0011\u0015\u0007\b\u0002\u0002\u0012\u0015\u0007\t\u0002\u0002",
    "\u0013\u0015\u0007\u0006\u0002\u0002\u0014\u0010\u0003\u0002\u0002\u0002",
    "\u0014\u0011\u0003\u0002\u0002\u0002\u0014\u0012\u0003\u0002\u0002\u0002",
    "\u0014\u0013\u0003\u0002\u0002\u0002\u0015\u0005\u0003\u0002\u0002\u0002",
    "\u0004\u000b\u0014"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class EntityLinkParser extends antlr4.Parser {

    static grammarFileName = "EntityLink.g4";
    static literalNames = [ null, "'<#E'", "'>'", null, null, "'::'" ];
    static symbolicNames = [ null, null, null, "ENTITY_TYPE", "ENTITY_FIELD", 
                             "RESERVED", "ENTITY_ATTRIBUTE", "ENTITY_FQN" ];
    static ruleNames = [ "entitylink", "entity" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = EntityLinkParser.ruleNames;
        this.literalNames = EntityLinkParser.literalNames;
        this.symbolicNames = EntityLinkParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	entitylink() {
	    let localctx = new EntitylinkContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, EntityLinkParser.RULE_entitylink);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 4;
	        this.match(EntityLinkParser.T__0);
	        this.state = 7; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 5;
	            this.match(EntityLinkParser.RESERVED);
	            this.state = 6;
	            this.entity();
	            this.state = 9; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===EntityLinkParser.RESERVED);
	        this.state = 11;
	        this.match(EntityLinkParser.T__1);
	        this.state = 12;
	        this.match(EntityLinkParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	entity() {
	    let localctx = new EntityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, EntityLinkParser.RULE_entity);
	    try {
	        this.state = 18;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case EntityLinkParser.ENTITY_TYPE:
	            localctx = new EntityTypeContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 14;
	            this.match(EntityLinkParser.ENTITY_TYPE);
	            break;
	        case EntityLinkParser.ENTITY_ATTRIBUTE:
	            localctx = new EntityAttributeContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 15;
	            this.match(EntityLinkParser.ENTITY_ATTRIBUTE);
	            break;
	        case EntityLinkParser.ENTITY_FQN:
	            localctx = new EntityFqnContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 16;
	            this.match(EntityLinkParser.ENTITY_FQN);
	            break;
	        case EntityLinkParser.ENTITY_FIELD:
	            localctx = new EntityFieldContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 17;
	            this.match(EntityLinkParser.ENTITY_FIELD);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

EntityLinkParser.EOF = antlr4.Token.EOF;
EntityLinkParser.T__0 = 1;
EntityLinkParser.T__1 = 2;
EntityLinkParser.ENTITY_TYPE = 3;
EntityLinkParser.ENTITY_FIELD = 4;
EntityLinkParser.RESERVED = 5;
EntityLinkParser.ENTITY_ATTRIBUTE = 6;
EntityLinkParser.ENTITY_FQN = 7;

EntityLinkParser.RULE_entitylink = 0;
EntityLinkParser.RULE_entity = 1;

class EntitylinkContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EntityLinkParser.RULE_entitylink;
    }

	EOF() {
	    return this.getToken(EntityLinkParser.EOF, 0);
	};

	RESERVED = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(EntityLinkParser.RESERVED);
	    } else {
	        return this.getToken(EntityLinkParser.RESERVED, i);
	    }
	};


	entity = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EntityContext);
	    } else {
	        return this.getTypedRuleContext(EntityContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof EntityLinkListener ) {
	        listener.enterEntitylink(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof EntityLinkListener ) {
	        listener.exitEntitylink(this);
		}
	}


}



class EntityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EntityLinkParser.RULE_entity;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class EntityAttributeContext extends EntityContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ENTITY_ATTRIBUTE() {
	    return this.getToken(EntityLinkParser.ENTITY_ATTRIBUTE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof EntityLinkListener ) {
	        listener.enterEntityAttribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof EntityLinkListener ) {
	        listener.exitEntityAttribute(this);
		}
	}


}

EntityLinkParser.EntityAttributeContext = EntityAttributeContext;

class EntityTypeContext extends EntityContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ENTITY_TYPE() {
	    return this.getToken(EntityLinkParser.ENTITY_TYPE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof EntityLinkListener ) {
	        listener.enterEntityType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof EntityLinkListener ) {
	        listener.exitEntityType(this);
		}
	}


}

EntityLinkParser.EntityTypeContext = EntityTypeContext;

class EntityFieldContext extends EntityContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ENTITY_FIELD() {
	    return this.getToken(EntityLinkParser.ENTITY_FIELD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof EntityLinkListener ) {
	        listener.enterEntityField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof EntityLinkListener ) {
	        listener.exitEntityField(this);
		}
	}


}

EntityLinkParser.EntityFieldContext = EntityFieldContext;

class EntityFqnContext extends EntityContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ENTITY_FQN() {
	    return this.getToken(EntityLinkParser.ENTITY_FQN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof EntityLinkListener ) {
	        listener.enterEntityFqn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof EntityLinkListener ) {
	        listener.exitEntityFqn(this);
		}
	}


}

EntityLinkParser.EntityFqnContext = EntityFqnContext;


EntityLinkParser.EntitylinkContext = EntitylinkContext; 
EntityLinkParser.EntityContext = EntityContext; 
