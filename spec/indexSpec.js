describe('Theme toggle button', function () {
    it('should call toggleTheme function when clicked', function () {
        spyOn(window, 'toggleTheme');
        document.getElementById('theme-toggle').click();
        expect(window.toggleTheme).toHaveBeenCalled();
    });
    it('on click, should add theme-light class to body if theme-light class not present, and remove if it is present', function () {
        expect(document.getElementById('body').classList).not.toContain('theme-light');
        document.getElementById('theme-toggle').click();
        expect(document.getElementById('body').classList).toContain('theme-light');
        document.getElementById('theme-toggle').click();
        expect(document.getElementById('body').classList).not.toContain('theme-light');
    });
});