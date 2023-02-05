const EmailSender = require("./EmailSender");

var msg = new EmailSender.Message(
    `subject`,
    `plain text content`,
    `<h1>HTML content!</h1>
    <p>My message.</p>`,
    [
        "email1@email.com", 
        "email2@email.com", 
        "email3@email.com", 
        "email4@email.com"
    ]
);

var origin = new EmailSender.Origin(
    "smtp.youremailservice.com",
    "Author's Name",
    "author_email@email.com",
    "author's_account_password"
);

EmailSender.SendEmail(msg, origin);