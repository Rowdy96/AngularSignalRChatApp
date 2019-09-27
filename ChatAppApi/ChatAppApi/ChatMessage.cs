using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatAppApi
{
    public class ChatMessage
    {
        public string Text { get; set; }
        public string SenderName { get; set; }
        public DateTimeOffset SendAt { get; set; }
    }
}
