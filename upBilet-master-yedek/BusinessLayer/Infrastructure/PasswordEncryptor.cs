using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Infrastructure
{
    public class PasswordEncryptor
    {
        public static string Encrpt(string password)
        {

            byte[] inputBytes = Encoding.ASCII.GetBytes(password);
            byte[] hashBytes = MD5.HashData(inputBytes);

            return Convert.ToHexString(hashBytes);
        }
    }
} 
