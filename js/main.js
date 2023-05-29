const elsPaymentPeriodRadio = document.querySelectorAll('[name="payment_period"]');
const elsPricingPlanValue = document.querySelectorAll('.pricing-plan-value');

elsPaymentPeriodRadio.forEach(function (elPaymentPeriodRadio) {
    elPaymentPeriodRadio.addEventListener('change', function() {
        const period = elPaymentPeriodRadio.value

        if (period === 'annual') {
            elsPricingPlanValue.forEach(function (elValue) {
                elValue.textContent = elValue.closest('.pricing-plan').dataset.paymentAnnual
            });
        } else {
            elsPricingPlanValue.forEach(function (elValue) {
                elValue.textContent = elValue.closest('.pricing-plan').dataset.paymentMonthly
            });
        }
    })
});