using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AspNetAlpine.Models
{
    public enum ContactType : ushort
    {
        None = 0,
        Unknown,
        Email,
        Fax,
        IM,
        TelephoneHome,
        TelephoneWork
    }
}