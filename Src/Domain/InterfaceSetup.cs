using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class InterfaceSetup
    {
        [Key]
        public int Id { get; set; }
        public DateTime CreatedOn { get; set; }
        public string CreatedBy { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Method { get; set; }
        public string URL { get; set; }
        public string Endpoint { get; set; }
        public bool Active { get; set; }
        public bool Deleted { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public string UpdatedBy { get; set; }
        public int ParameterTemplateId { get; set; }
        public ParameterTemplate ParameterTemplate { get; set; }

    }
}