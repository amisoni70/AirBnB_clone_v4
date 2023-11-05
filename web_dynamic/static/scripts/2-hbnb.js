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

$.ajax({
  url: 'http://0.0.0.0:5001/api/v1/status/',
  type: 'GET',
  dataType: 'json',
  success: function (json) {
    $('#api_status').addClass('available');
  },

  error: function (xhr, status) {
    console.log('error ' + status);
  }

});
