jQuery(document).ready(function($) {
    var portfolioList = $('#chillthemes-portfolio-list');
    portfolioList.sortable({
        update: function( event, ui ) {
            opts = {
                async: true,
                cache: false,
                dataType: 'json',
                type: 'POST',
                url: ajaxurl,
                data: {
                    action: 'portfolio_sort',
                    order: portfolioList.sortable( 'toArray' ).toString() 
                },
                success: function( response ) {
                    return;
                },
                error: function( xhr, textStatus, e ) {
                    alert( 'The order of the items could not be saved at this time, please try again.' );
                    return;
                }
            };
        $.ajax(opts);
        }
    });
});