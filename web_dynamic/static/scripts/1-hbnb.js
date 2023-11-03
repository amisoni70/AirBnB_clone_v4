$('document').ready(function () {
  $('.popover UL LI INPUT').css('margin-right', '10px');
  const selectedAmenities = {};
  $('input[type="checkbox"]').change(function () {
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name');

    if (this.checked) {
         selectedAmenities[amenityId] = amenityName;
    } else {
        delete selectedAmenities[amenityId];
    }

    const amenitiesChecked = Object.values(selectedAmenities).join(', ');
    $('.amenities h4').text(amenitiesChecked);
  });
});
