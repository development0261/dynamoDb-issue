var aws = require('aws-sdk');
exports.handler = async function(event, context, callback) {
    // Here, Stripe will give response.
    const stripe = require('stripe')('XXXXXXXXX');
    const StripeCustomer =  await stripe.customers.create({
        description: 'My First Test Customer (created for API docs)',
        email: 'test@gmail.com',
        name: 'shdfahsdfjqoiwer123'
    });
    console.log('==>>======StripeCustomer====>>', StripeCustomer);


    // Start - DynamoDb
    aws.config.update({
        accessKeyId: 'XXXXXXXXX',
        secretAccessKey: 'XXXXXXXXX',
        region: 'XXXXXXXXXXXXX'
    });
    var dynamodb = new aws.DynamoDB.DocumentClient();
    var paramsGet = {
        TableName: 'test'
    };
    dynamodb.scan(paramsGet, async(err, data) => {
    
    // Here, Stripe will not give any response.
        const stripe = require('stripe')('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
        const StripeCustomer = await stripe.customers.create({
            description: 'My First Test Customer (created for API docs)',
            email: event.email,
            name: uuid
        });
        console.log('==>>======StripeCustomer====>>', StripeCustomer);
        console.log('I\'m here');
    });
}
