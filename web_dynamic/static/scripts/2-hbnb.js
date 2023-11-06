$(document).ready(function () {
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

  function updateApiStatus() {
    const link =  'http://' + window.location.hostname;
    $.get(link + ':5001/api/v1/status/', function (data) {
      const apiStatusElement = $('#api_status');

      if (data.status === 'OK') {
        apiStatusElement.addClass('available');
      } else {
        apiStatusElement.removeClass('available');
      }
    });
  }

  updateApiStatus();
});

      /*setInterval(updateApiStatus, 5000);*/

        /*apiStatusElement.css('background-color', '');
        $('#api_status').addClass('available');
        $('#api_status').css('background-color', '');*/


        /*apiStatusElement.css('background-color', '#cccccc');
        $('#api_status').removeClass('available');
        $('div#api_status').css('background-color','#cccccc');*/
