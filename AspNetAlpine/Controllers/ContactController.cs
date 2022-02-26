using AspNetAlpine.Models;
using System.Collections.Generic;
using System.Web.Http;

namespace AspNetAlpine.Controllers
{
    public class ContactController : ApiController
    {
        // GET: api/Contact
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Contact/5
        public string Get(int id)
        {
            return $"value {id}";
        }

        // POST: api/Contact
        public void Post([FromBody]PostContactReq value)
        {
        }

        // PUT: api/Contact/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Contact/5
        public void Delete(int id)
        {
        }

        // GET: api/Contact/type
        [Route("~/api/contact/type")]
        public IEnumerable<ContactTypeRes> GetTypeOfContact()
        {
            return new[] {
                new ContactTypeRes { Id = (int)ContactType.None, Description = ContactType.None.ToString() },
                new ContactTypeRes { Id = (int)ContactType.Unknown, Description = ContactType.Unknown.ToString() },
                new ContactTypeRes { Id = (int)ContactType.Email, Description = ContactType.Email.ToString() },
                new ContactTypeRes { Id = (int)ContactType.Fax, Description = ContactType.Fax.ToString() },
                new ContactTypeRes { Id = (int)ContactType.IM, Description = ContactType.IM.ToString() },
                new ContactTypeRes { Id = (int)ContactType.TelephoneHome, Description = ContactType.TelephoneHome.ToString()},
                new ContactTypeRes { Id = (int)ContactType.TelephoneWork, Description = ContactType.TelephoneWork.ToString() }
            };
        }
    }
}
