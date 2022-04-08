﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;

namespace WebbProjekt_yr3.Models
{       
    public class ProductModel
    {
        [Key]
        public Guid ProductId { get; set; }
        [Column(TypeName ="nvarchar(max)")]
        public string Name { get; set; }
        [Column(TypeName ="date")]
        public DateTime ReleaseYear { get; set; }
        [Column (TypeName ="DateTime")]
        public DateTime AddDate { get; set; }

        [Column(TypeName = "nvarchar(max)")]
        public string Country { get; set; }
        [Column(TypeName = "nvarchar(max)")]
        public string Format { get; set; }
        [Column(TypeName = "nvarchar(max)")]
        public string Genre { get; set; }
        [Column(TypeName = "nvarchar(max)")]
        public int UnitsInStock { get; set; }
        [Column(TypeName = "nvarchar(max)")]
        public int ImageName { get; set; }
        [NotMapped]
        public IFormFile ImageFile { get; set; }
    }
}
