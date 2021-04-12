import httpStatus from "http-status";

class ExtendableError extends Error {
    constructor(message,status,isPublic) {
        super(message);
        this.name = this.constructor.name;
        this.status = status;
        this.isPublic = isPublic;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }
}

class APIError extends ExtendableError {
    constructor(message, status = httpStatus.INTERNAL_SERVER_ERROR, isPublic =false) {
        super(message, status, isPublic);
    }
}

/*var apierror = new APIError("ll");
console.log(apierror.message);
console.log(apierror instanceof Error);
console.log(apierror.name);
console.log(apierror.stack);*/

export default APIError
