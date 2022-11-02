class RenderModel {
    public static RenderFilterButton() {
        $("#birthday-filter-btn").html(
            `<i class="bi bi-funnel"></i> Filter by birthday`
        );
    }
    private static renderContainer(
        objectToRender: object,
        containerName: string
    ) {
        const userhtml = $(`#${containerName}-template`).html();
        const template = Handlebars.compile(userhtml);
        const newHTML = template(objectToRender);
        $(`.${containerName}-container`).append(newHTML);
    }
    private static emptyContainer(containerName: string) {
        $(`.${containerName}-container`).empty();
    }
}
