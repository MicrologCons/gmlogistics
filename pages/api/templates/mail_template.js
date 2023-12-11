const customerMailTemplate = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
    </link>
    <title>Accusé de reception · Acknoledgement of Receipt</title>
    <style>
        body {
            font-family: 'Poppins';
            padding: 1rem;
        }

        * {
            font-family: 'Poppins';
        }
    </style>
</head>

<body>

    <h1 style="color: black; margin-top: 1.5rem; font-weight: 700;">ACKNOLEDGEMENT OF RECEIPT</h1>
    <h4 style="font-weight: 400;"><b>From : </b>Microlog Consulting</h4>

    <p>Madame/Monsieur {{customer_name}} Merci de nous avoir contactés, restez connecté nous vous
        reviendrons
        bientôt avec des amples détails
        par rapport à
        votre message !</p>

    <div style="background-color: gray; height: 1px; margin-top: 1rem; margin-bottom: 1rem; width: 100%;"></div>

    <p class="message">Ms/Mr {{customer_name}} Thank you very much for having contacted us, we're full of
        gratitute, concerning your
        message, stay
        connected we will update you soon !</p>

    <p>Visite our website : <a href="https://microlog.tech">www.microlog.tech</a></p>
    <br/>
    <img style="width: 200px;" src="https://microlog.tech/images/micologo.png"
        alt="logo">

    <p style="margin-top: 2rem;  "> 2023&copy;Microlog Consulting · All rights reserved</p>


</body>

</html>
`;

module.exports = customerMailTemplate;
