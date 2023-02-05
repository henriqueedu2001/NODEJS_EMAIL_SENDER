const nodemailer = require("nodemailer");

class message {
    constructor(subject, text, html, receivers) {
        this.text = text;
        this.html = html;
        this.subject = subject;
        this.receivers = receivers;
    }
    get_receivers_string(){
        var final_string = "";
        var last_index = this.receivers.length - 1;

        for(var i = 0; i < last_index; i++)
            final_string += this.receivers[i] + ", ";
        final_string += this.receivers[last_index];
        
        return final_string;
    }
};

class origin {
    constructor(host, username, user_email, password) {
        this.host = host; 
        this.username = username; 
        this.user_email = user_email; 
        this.password = password;
        this.transporter = nodemailer.createTransport({
            host: host,
            port: 587,
            secure: false,
            auth: {
                user: user_email,
                pass: password,
            },
        });
    }
    get_autor_string(){
        return '"' + this.username + '" <' + this.user_email + '>';
    }
};

async function SendEmail(message, origin){
    console.log(
        origin.get_autor_string(),
        message.get_receivers_string(),
        message.subject,
        message.text,
        message.html
    );
    
    let send_message = await origin.transporter.sendMail({
        from: origin.get_autor_string(),
        to: message.get_receivers_string(),
        subject: message.subject,
        text: message.text,
        html: message.html
    });
}

module.exports = {
    SendEmail,
    origin,
    message
}