const challengeHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Security Passed</title>
</head>
<body style="font-family: Georgia, serif; background-color: #fff0f0; text-align: left; padding: 20px;">
    
    <main style="max-width: 600px; margin: 40px auto; padding: 30px; border: 2px solid #ff4500; background-color: #ffffff; border-radius: 8px;">
        
        <h2 style="color: #ff4500; border-bottom: 2px solid #ff4500; padding-bottom: 10px;">Security Check Passed by Cloudflare</h2>
        
        <p style="font-size: 1.1em; margin-bottom: 30px;">
            The automated challenge to protect our site's resources has been successfully completed.
        </p>

        <div style="text-align: center; padding: 20px; background-color: #ffeeee; border-radius: 5px; margin-bottom: 30px;">
            <p style="font-size: 1.8em; color: #ff0000; font-weight: bold; margin: 0;">
                You are successfully verified by Cloudflare
            </p>
        </div>

    </main>

</body>
</html>
`;

addEventListener('fetch', event => {
    event.respondWith(new Response(challengeHtml, {
        headers: {
            'Content-Type': 'text/html'
        }
    }));
});