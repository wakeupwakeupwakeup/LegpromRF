import React, { useEffect } from 'react';

function TokenPage() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-token-with-polyfills-latest.js';
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            // Ваш код для инициализации скрипта с параметрами, как в вашем примере
            window.YaSendSuggestToken('/http://localhost:3000/tokenpage/', {
                flag: true,
            });
        };
    }, []);

    return (
        <></>
    );
}

export default TokenPage;