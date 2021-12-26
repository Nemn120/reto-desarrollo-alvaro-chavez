import Joi = require("joi");

export const middlewareValidationBody = (schema : any) => { 
  return async (ctx : any, next : any) => { 
      console.log(ctx.request);
  const { error } = schema.validate(ctx.request.body); 
  await verifyError(error, next, ctx); 
}}; 

export const middlewareValidationParam = (schema : any) => { 
    return async (ctx : any, next : any) => { 
    const { error } = schema.validate(ctx.params); 
    console.log(ctx.params)
      await verifyError(error, next, ctx); 
  }}; 
  
  export const middlewareValidationHeader = (schema : any) => { 
    return async (ctx : any, next : any) => { 
        console.log(ctx)
    const { error } = schema.validate(ctx.headers); 
      await verifyError(error, next, ctx); 
  }}; 
 
  async function verifyError(error: any, next: any, ctx: any) {
    const valid = error == null;
    if (valid) {
        console.log("next");
        await next();
    } else {
        const { details } = error;
        const message = details.map((i: { message: any; }) => i.message).join(',');
        console.log("ERROR MESSAGE");
        ctx.body = { error: message };
    }
}

