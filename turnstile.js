const turnstileHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verification Success</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f0f8ff; text-align: left; padding: 20px;">
    
    <main style="max-width: 600px; margin: 40px auto; padding: 30px; border: 2px solid #4CAF50; background-color: #ffffff; border-radius: 8px;">
        
        <h2 style="color: #4CAF50; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">Verification Complete by Cloudflare</h2>
        
        <p style="font-size: 1.1em; margin-bottom: 30px;">
            Thank you for participating in the automated security check via the **Turnstile service**.
        </p>

        <div style="text-align: center; padding: 20px; background-color: #e6ffe6; border-radius: 5px; margin-bottom: 30px;">
            <p style="font-size: 1.8em; color: #008000; font-weight: bold; margin: 0;">
                You are successfully verified by Cloudflare
            </p>
        </div>

    </main>

</body>
</html>
`;

// NEW ES MODULE SYNTAX STARTS HERE
// This function handles the request and returns the HTML
async function handleRequest(request) {
    return new Response(turnstileHtml, {
        headers: {
            'Content-Type': 'text/html'
        }
    });
}

// Export the default object that contains the fetch handler
export default {
    async fetch(request, env, ctx) {
        return handleRequest(request);
    },
};
