import { MailAdapter, SendMailData } from './../mail-adapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "96a7e66f7fa30d",
      pass: "cc06da1c3a6504"
    }
  });


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
            await transport.sendMail({
        from: 'Equipe Feedget <oi.fedget.com>',
        to: 'Nicolas <nicolas.masopb@hotmail.com>',
        subject,
        html: body
    })
    };
}