/*
 * moleculer
 * Copyright (c) 2018 MoleculerJS (https://github.com/moleculerjs/moleculer)
 * MIT Licensed
 */

"use strict";

const P = require("../../packets");

const constants = {
	PACKET_EVENT_ID: 1,
	PACKET_REQUEST_ID: 2,
	PACKET_RESPONSE_ID: 3,
	PACKET_PING_ID: 4,
	PACKET_PONG_ID: 5,
	PACKET_GOSSIP_REQ_ID: 6,
	PACKET_GOSSIP_RES_ID: 7,
	PACKET_GOSSIP_HELLO_ID: 8,

	IGNORABLE_ERRORS: [
		"ECONNREFUSED",
		"ECONNRESET",
		"ETIMEDOUT",
		"EHOSTUNREACH",
		"ENETUNREACH",
		"ENETDOWN",
		"EPIPE",
		"ENOENT"
	],

	resolvePacketID(type) {
		/* istanbul ignore next */
		switch (type) {
			case P.PACKET_EVENT:
				return constants.PACKET_EVENT_ID;
			case P.PACKET_REQUEST:
				return constants.PACKET_REQUEST_ID;
			case P.PACKET_RESPONSE:
				return constants.PACKET_RESPONSE_ID;
			case P.PACKET_PING:
				return constants.PACKET_PING_ID;
			case P.PACKET_PONG:
				return constants.PACKET_PONG_ID;
			case P.PACKET_GOSSIP_REQ:
				return constants.PACKET_GOSSIP_REQ_ID;
			case P.PACKET_GOSSIP_RES:
				return constants.PACKET_GOSSIP_RES_ID;
			case P.PACKET_GOSSIP_HELLO:
				return constants.PACKET_GOSSIP_HELLO_ID;
			default:
				throw new Error("Unsupported packet type (" + type + ")!");
		}
	},

	resolvePacketType(id) {
		/* istanbul ignore next */
		switch (id) {
			case constants.PACKET_EVENT_ID:
				return P.PACKET_EVENT;
			case constants.PACKET_REQUEST_ID:
				return P.PACKET_REQUEST;
			case constants.PACKET_RESPONSE_ID:
				return P.PACKET_RESPONSE;
			case constants.PACKET_PING_ID:
				return P.PACKET_PING;
			case constants.PACKET_PONG_ID:
				return P.PACKET_PONG;
			case constants.PACKET_GOSSIP_REQ_ID:
				return P.PACKET_GOSSIP_REQ;
			case constants.PACKET_GOSSIP_RES_ID:
				return P.PACKET_GOSSIP_RES;
			case constants.PACKET_GOSSIP_HELLO_ID:
				return P.PACKET_GOSSIP_HELLO;
			default:
				throw new Error("Unsupported packet ID (" + id + ")!");
		}
	}
};

module.exports = constants;
