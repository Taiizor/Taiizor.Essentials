﻿namespace Taiizor.Essentials.Maui.Extension
{
    public class Include
    {
        public static async Task Font(string Path)
        {
            await Font(Path, "stylesheet");
        }

        public static async Task Font(string Path, string Rel)
        {
            await Interop.Call("Taiizor.IncludeFont", Path, Rel);
        }

        public static async Task Script(string Path)
        {
            await Interop.Call("Taiizor.IncludeJs", Path);
        }

        public static async Task Stylesheet(string Path)
        {
            await Stylesheet(Path, "stylesheet");
        }

        public static async Task Stylesheet(string Path, string Rel)
        {
            await Stylesheet(Path, Rel, "text/css");
        }

        public static async Task Stylesheet(string Path, string Rel, string Type)
        {
            await Interop.Call("Taiizor.IncludeCss", Path, Rel, Type);
        }
    }
}