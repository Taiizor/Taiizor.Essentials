﻿namespace Taiizor.Essentials.Maui.Value
{
    internal class Internal
    {
        public static readonly string DefaultCulture = "en-GB";

        public static readonly string CacheDirectory = FileSystem.Current.CacheDirectory;

        public static readonly string DataDirectory = FileSystem.Current.AppDataDirectory;

        public static readonly string StorageExtension = ".json";

        public static readonly string JavascriptFile = "Taiizor.Essentials.Maui.Resources.Raw.{0}.blazor.js";
    }
}