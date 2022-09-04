﻿using Microsoft.AppCenter;
using Microsoft.AppCenter.Analytics;
using Microsoft.AppCenter.Crashes;
using System.Globalization;
using System.Runtime.ExceptionServices;
using System.Text;
using Taiizor.Essentials.Maui.AppCenter.Enum;
using Taiizor.Essentials.Maui.AppCenter.Value;
using AC = Microsoft.AppCenter.AppCenter;
using Service = Taiizor.Essentials.Maui.AppCenter.Platforms.Services.AppCenterService;

#if WINDOWS

using Unhandled = Microsoft.UI.Xaml.UnhandledExceptionEventArgs;

#endif

namespace Taiizor.Essentials.Maui.AppCenter.Services
{
    public class AppCenterService
    {
        public static void Engine(Dictionary<AppEnum, string> Keys)
        {
            Key(Keys);
            Enabled(); //
            Level(); //
            User();
            Country();
            Service.Start();
        }

        public static void TestCrash()
        {
            if (Internal.AppCenterState)
            {
                Crashes.GenerateTestCrash();
            }
        }

        public static void Exception(FirstChanceExceptionEventArgs e)
        {
            if (Internal.AppCenterState)
            {
                TrackError(e.Exception, "FirstChanceMessage", e.Exception.Message);
            }
        }

        public static void Exception(UnhandledExceptionEventArgs e)
        {
            if (Internal.AppCenterState)
            {
                TrackError((Exception)e.ExceptionObject, "UnhandledMessage", ((Exception)e.ExceptionObject).Message);
            }
        }

#if WINDOWS

        public static void Exception(Unhandled e)
        {
            if (Internal.AppCenterState)
            {
                TrackError(e.Exception, "UnhandledMessage", e.Exception.Message);
            }
        }

#endif

        public static void Exception(UnobservedTaskExceptionEventArgs e)
        {
            if (Internal.AppCenterState)
            {
                TrackError(e.Exception, "UnobservedMessage", e.Exception.Message);
            }
        }

        public static void Exception(Exception e)
        {
            if (Internal.AppCenterState)
            {
                TrackError(e);
            }
        }

        public static void TrackEvent(string Name)
        {
            if (Internal.AppCenterState)
            {
                Analytics.TrackEvent(Name);
            }
        }

        public static void TrackEvent(string Name, string Key, string Value)
        {
            if (Internal.AppCenterState)
            {
                Analytics.TrackEvent(Name, new Dictionary<string, string>() { { Key, Value } });
            }
        }

        public static void TrackEvent(string Name, IDictionary<string, string> Properties = null)
        {
            if (Internal.AppCenterState)
            {
                Analytics.TrackEvent(Name, Properties);
            }
        }

        public static void TrackError(Exception Exception)
        {
            if (Internal.AppCenterState)
            {
                Crashes.TrackError(Exception);
            }
        }

        public static void TrackError(Exception Exception, string Key, string Value)
        {
            if (Internal.AppCenterState)
            {
                Crashes.TrackError(Exception, new Dictionary<string, string>() { { Key, Value } });
            }
        }

        public static void TrackError(Exception Exception, IDictionary<string, string> Properties = null)
        {
            if (Internal.AppCenterState)
            {
                Crashes.TrackError(Exception, Properties);
            }
        }

        public static void TrackError(Exception Exception, IDictionary<string, string> Properties = null, string Text = "Hello World!", string TextFile = "Hello.txt", string Image = "Fake Image", string ImageFile = "fake_image.jpeg", string Extension = "image/jpeg")
        {
            if (Internal.AppCenterState)
            {
                TrackError(Exception, Properties, new ErrorAttachmentLog[]
                {
                    ErrorAttachmentLog.AttachmentWithText(Text, TextFile),
                    ErrorAttachmentLog.AttachmentWithBinary(Encoding.UTF8.GetBytes(Image), ImageFile, Extension)
                });
            }
        }

        public static void TrackError(Exception Exception, IDictionary<string, string> Properties = null, string Text = "Hello World!", string TextFile = "Hello.txt", byte[] Image = null, string ImageFile = "fake_image.jpeg", string Extension = "image/jpeg")
        {
            if (Internal.AppCenterState)
            {
                Crashes.TrackError(Exception, Properties, new ErrorAttachmentLog[]
                {
                    ErrorAttachmentLog.AttachmentWithText(Text, TextFile),
                    ErrorAttachmentLog.AttachmentWithBinary(Image, ImageFile, Extension)
                });
            }
        }

        public static void TrackError(Exception Exception, IDictionary<string, string> Properties = null, ErrorAttachmentLog[] Attachments = null)
        {
            if (Internal.AppCenterState)
            {
                Crashes.TrackError(Exception, Properties, Attachments);
            }
        }

        private static void Key(Dictionary<AppEnum, string> Keys)
        {
            if (Keys != null && Keys.Keys.Count > 0)
            {
                foreach (AppEnum App in Keys.Keys)
                {
                    if (!string.IsNullOrEmpty(Keys[App]))
                    {
                        Internal.AppCenterKey[App] = Keys[App];
                    }
                }
            }
        }

        private static void Country()
        {
            AC.SetCountryCode(CultureInfo.CurrentCulture.TwoLetterISOLanguageName);
            //AC.SetCountryCode(RegionInfo.CurrentRegion.TwoLetterISORegionName);
            //AC.SetCountryCode(CultureInfo.InstalledUICulture.TwoLetterISOLanguageName);
        }

        private static void User()
        {
            AC.SetUserId($"{DeviceInfo.Current.Name}-{DeviceInfo.Current.Model}");
        }

        private static void Level()
        {
            AC.LogLevel = LogLevel.Verbose;
        }

        private static void Enabled()
        {
            Crashes.SetEnabledAsync(true);
        }
    }
}