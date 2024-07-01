$(document).ready(function () {
	// Funkcja, która obsługuje rozwijanie i zwijanie sekcji FAQ
	function toggleAccordion() {
		$('.collapse').click('show.bs.collapse', function () {
			$('.collapse.show').collapse('hide');
		});
	}

	toggleAccordion();
});


