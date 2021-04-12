const mongoose = require('mongoose');

// start session
async function startSession() {
    return await mongoose.startSession();
}

// start session transaction
async function startSessionWithTransaction() {
    const session = await mongoose.startSession();
    session.startTransaction();
    return session;
}

// abort session transaction
async function abortTransaction(session) {
    if (session && !session.hasEnded) {
        await session.abortTransaction();
        session.endSession();
    }
}

// commit session transaction
async function commitTransaction(session) {
    if (session) {
        await session.commitTransaction();
        session.endSession();
    }
}

module.exports = {
    startSession,
    startSessionWithTransaction,
    abortTransaction,
    commitTransaction
};
