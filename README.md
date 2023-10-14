# NODE JS EMAIL SENDER
Simple email sender, based on nodejs, for backend applications.

## Dependencies:
  - nodemailer > 6.9.1

## How to use this system?
The system has basic two abstractions: message and origin.

**Message**: the content of the email
	-**Subject**: subject of the email
	-**Text**: plain text of the content
	-**html**: html content of the content
	-**receivers**: receivers list 
	
**Origin**: the account that will send the email
	-**host**: servidor SMTP
	-**username**: username of the sender
	-**user_email**: email of the sender
	-**password**: password of the email sender account

To send an email, start by creating an Origin object

```
var origin = new EmailSender.Origin(<host>, <username>, <email>, <password>);
```

One single origin can be used to send multiple emails. For security reasons, is recomended to use the package dotenv to manage the emails and passwords of the senders accounts. It's a bad ideia to write sensitive informations directly in the code xD.

After this, create the message:

```
var msg = new EmailSender.Message(<subject>, <text>, <html>, <receivers>);
```

Finally, send the email using the origin:

```
EmailSender.SendEmail(msg, origin);
```

Done!
