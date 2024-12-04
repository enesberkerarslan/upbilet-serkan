using System.ComponentModel.DataAnnotations;

namespace ApiLayer.Models.AdminPanel.PaymentPeriod
{
    public class PaymentPeriodViewModel
    {
        public int PaymentPeriodId { get; set; }

        public string PeriodName { get; set; }
        public DateTime PeriodDate { get; set; }
    }
}
