from pyramid.view import notfound_view_config


@notfound_view_config(renderer='tugas_4:templates/404.jinja2')
def notfound_view(request):
    request.response.status = 404
    return {}
