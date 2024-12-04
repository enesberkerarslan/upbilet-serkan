using EntityLayer.Concrete;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.ValidationRules
{
    public class UserValidator : AbstractValidator<UserEntity>
    {
        public UserValidator()
        {
            RuleFor(x => x.UserMail).NotEmpty()
                .WithMessage("usermail boş olamaz");
            RuleFor(x => x.UserMail).EmailAddress()
                .WithMessage("a valid email adress is required");



            RuleFor(x => x.Password).NotEmpty()
                .WithMessage("password is required");
            RuleFor(x => x.Password).MinimumLength(8)
                 .WithMessage("minimum password length 8 character");
            RuleFor(x => x.Password).MaximumLength(30)
                .WithMessage("max password length 30 character");



            RuleFor(x => x.PhoneNumber).NotEmpty()
                .WithMessage("Phone number required");
            RuleFor(x => x.PhoneNumber)
                .MinimumLength(8)
                .WithMessage("phone number is wrong ");


        }
    }
}
