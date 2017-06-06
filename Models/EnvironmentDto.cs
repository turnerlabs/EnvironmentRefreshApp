using System.Collections.Generic;

namespace EnvironmentRefreshApp.Models
{
    public class EnvironmentDto
    {
        public static List<EnvironmentDto> Environments;

        static EnvironmentDto()
        {
            EnvironmentDto.Environments = new List<EnvironmentDto>(
                new EnvironmentDto[] {
                    new EnvironmentDto {
                        Environment = "MAIN",
                        Description = "Main development"
                    },
                    new EnvironmentDto {
                        Environment = "QA",
                        Description = "Quality Assurance testing"
                    },
                    new EnvironmentDto {
                        Environment = "PROD",
                        Description = "Production"
                    }
                }
            );
        }
        public string Environment { get; set; }
        public string Description { get; set; }
    }
}
