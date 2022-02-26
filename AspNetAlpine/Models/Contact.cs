namespace AspNetAlpine.Models
{
    public class Contact
    {
        public string Text { get; set; }
        public ContactType Type { get; set; }
        public bool Enabled { get; set; }
        public string Option { get; set; }
    }
}