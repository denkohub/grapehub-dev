fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const plan = data.plan;
    const free = plan.totalSlots - plan.usedSlots;

    document.getElementById('plan').textContent = plan.name;
    document.getElementById('slots').textContent =
      plan.usedSlots + ' / ' + plan.totalSlots;

    document.getElementById('price').textContent = '$' + plan.price;

    const status = document.getElementById('status');
    const btn = document.getElementById('buy');

    if (free > 0) {
      status.textContent = free + ' Slots verfügbar';
      status.style.color = 'green';
      btn.textContent = 'Plan kaufen – $' + plan.price;
      btn.disabled = false;
    } else {
      status.textContent = 'Ausverkauft';
      status.style.color = 'red';
      btn.textContent = 'Sold Out';
      btn.disabled = true;
    }
  });
