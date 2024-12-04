using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace BusinessLayer.EmailService
{
    public class EmailService
    {
        private readonly string apiKey = "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";

        public async Task SendEmailAsync(string toEmail)
        {
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("enes.berk.erarslan@gmail.com", "Enes berk Erarslan");
            var subject = "Sending with SendGrid is Fun";
            var to = new EmailAddress(toEmail, "Example User");
            var plainTextContent = "and easy to do anywhere, even with C#";
            var htmlContent = "<strong>and easy to do anywhere, even with C#</strong>";
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            var response = await client.SendEmailAsync(msg);
        }

        public async Task SendEmailAsync2(string toEmail, string subject, string message)
        {
            try
            {
                // E-posta gönderme işlemi için gerekli ayarları yapın
                var smtpClient = new SmtpClient("smtp.gmail.com")
                {
                    Port = 587,
                    Credentials = new NetworkCredential("enes.berk.erarslan@gmail.com", "Enesberk1."),
                    EnableSsl = true,
                };

                // Gönderici ve alıcı adreslerini oluşturun
                var from = new MailAddress("enes.berk.erarslan@gmail.com", "Enes Berk");
                var to = new MailAddress(toEmail);

                // E-posta mesajını oluşturun
                var mailMessage = new MailMessage(from, to)
                {
                    Subject = subject,
                    Body = message,
                    IsBodyHtml = true // İsteğe bağlı: HTML içerik kullanılıyorsa true yapın
                };

                // E-postayı gönderin
                await smtpClient.SendMailAsync(mailMessage);
            }
            catch (Exception ex)
            {
                throw new Exception("E-posta gönderme hatası: " + ex.Message);
            }
        }
    }
}
