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
        public void Post([FromBody]string value)
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
        public IEnumerable<string> GetTypeOfContact()
        {
            return new string[] { "email", "home", "work", "fax", "IM" };
        }
    }
}
