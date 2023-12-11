const receivingMailTemplate = `
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
    <title>Receipt Notification</title>
    <style>
        body {
            font-family: 'Poppins';
            padding: 1rem;

        }

        ;

        * {
            font-family: 'Poppins';
            padding: 1rem;
        }
    </style>
</head>

<body>

    <h1 style="color: black; margin-top: 1.5rem; font-weight: 900;">LEAD GLOBAL INFORMATION</h1>

    <table style="width: 100%;">

        <tr
            style="width: 100%; padding-top: 1.5rem; padding-bottom: 1.5rem; padding-left: 1rem; padding-right: 1rem; background-color: beige;">
            <th
                style="text-align: center; padding-top: 1.5rem; padding-bottom: 1.5rem; padding-left: 1rem; padding-right: 1rem ">
                Lead Name
            </th>
            <th
                style="text-align: center; padding-top: 1.5rem; padding-bottom: 1.5rem; padding-left: 1rem; padding-right: 1rem ">
                Lead
                Email </th>
            <th
                style="text-align: center; padding-top: 1.5rem; padding-bottom: 1.5rem; padding-left: 1rem; padding-right: 1rem ">
                Lead
                Phone</th>
            <th
                style="text-align: center; padding-top: 1.5rem; padding-bottom: 1.5rem; padding-left: 1rem; padding-right: 1rem ">
                Lead
                Message</th>
        </tr>
        <tr style="width: 100%; padding-top: 1.5rem; padding-bottom: 1.5rem; padding-left: 1rem; padding-right: 1rem ">
            <td
                style="text-align: center; padding-top: 1.5rem; padding-bottom: 1.5rem; padding-left: 1rem; padding-right: 1rem ">
                {{lead_name }}</td>
            <td
                style="text-align: center; padding-top: 1.5rem; padding-bottom: 1.5rem; padding-left: 1rem; padding-right: 1rem ">
                {{lead_email }} </td>
            <td
                style="text-align: center; padding-top: 1.5rem; padding-bottom: 1.5rem; padding-left: 1rem; padding-right: 1rem ">
                {{lead_phone }}</td>
            <td
                style="text-align: center; padding-top: 1.5rem; padding-bottom: 1.5rem; padding-left: 1rem; padding-right: 1rem ">
                {{ lead_message }}</td>
        </tr>
    </table>

    <p>Visite our website : <a href="https://microlog.tech">www.microlog.tech</a></p>
    <br/>
    <img style="width: 200px;" src="https://microlog.tech/images/micologo.png"
        alt="logo">
     <p style="margin-top: 2rem;  "> Microlog Consulting · All rights reserved</p>
</body>

</html>
`;

module.exports = receivingMailTemplate;
