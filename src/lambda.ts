import { Handler, Context, Callback } from 'aws-lambda'

export const handler: Handler = (event: any, context: Context, callback: Callback) => {

    context.done(undefined, event)
}
