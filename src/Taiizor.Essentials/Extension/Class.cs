﻿namespace Taiizor.Essentials.Extension
{
    public class Class
    {
        public static async Task Add(string Identify, string Class)
        {
            await Interop.Call("AddClass", Identify, Class);
        }

        public static async Task Add(string Identify, params string[] Classes)
        {
            foreach (string Class in Classes)
            {
                await Add(Identify, Class);
            }
        }

        public static async Task Set(string Identify, string Class)
        {
            await Interop.Call("SetClass", Identify, Class);
        }

        public static async Task Toggle(string Identify, string Class)
        {
            await Interop.Call("ToggleClass", Identify, Class);
        }

        public static async Task Toggle(string Identify, params string[] Classes)
        {
            foreach (string Class in Classes)
            {
                await Toggle(Identify, Class);
            }
        }

        public static async Task Remove(string Identify, string Class)
        {
            await Interop.Call("RemoveClass", Identify, Class);
        }

        public static async Task Remove(string Identify, params string[] Classes)
        {
            foreach (string Class in Classes)
            {
                await Remove(Identify, Class);
            }
        }
    }
}