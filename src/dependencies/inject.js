function createInject(featureName) {
    return function(modules) {
        const Layout = modules.shell.Layout.configure();
        const render = modules.base.Render.configure(Layout);

        return render;
    }
}

export const configure = createInject;