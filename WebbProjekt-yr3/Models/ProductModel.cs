using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace WebbProjekt_yr3.Models
{       
    public class ProductModel
    {   
        public Guid ProductId { get; set; }
        public string Name { get; set; }
        [Column(TypeName ="date")]
        public DateTime ReleaseYear { get; set; }
        public string Country { get; set; }
        public string Format { get; set; }
        public string Genre { get; set; }
    }
}
