"use strict";
class RenderModel {
    static RenderFilterButton() {
        $("#birthday-filter-btn").html(`<i class="bi bi-funnel"></i> Filter by birthday`);
    }
    static renderContainer(objectToRender, containerName) {
        const userhtml = $(`#${containerName}-template`).html();
        const template = Handlebars.compile(userhtml);
        const newHTML = template(objectToRender);
        $(`.${containerName}-container`).append(newHTML);
    }
    static emptyContainer(containerName) {
        $(`.${containerName}-container`).empty();
    }
}
