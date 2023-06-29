let response;

exports.lambdaHandler = async (event, context) => {
    let first_name=event['first_name']
    try {
        // const ret = await axios(url);
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello'+first_name,
                
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
