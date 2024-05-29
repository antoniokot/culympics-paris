package config

import (
	"log"
	"strings"

	"github.com/spf13/viper"
)

var config = viper.New()

func setConfigDefaults() {
	config.SetDefault("database.host", "localhost")
	config.SetDefault("database.username", "postgres")
	config.SetDefault("database.password", "postgres")
	config.SetDefault("database.database", "culympics")
	config.SetDefault("database.port", 5432)
	config.SetDefault("database.conn.min", 1)
	config.SetDefault("database.conn.max", 5)
	config.SetDefault("database.conn.lifetime", "3m")
	config.SetDefault("database.conn.idletime", "1m")
}

func Init() *viper.Viper {
	config.AddConfigPath("culympics-paris-api/internal/config/")
	config.SetConfigName("configuration")
	config.SetConfigType("yml")

	setConfigDefaults()

	if err := config.ReadInConfig(); err != nil {
		if _, ok := err.(viper.ConfigFileNotFoundError); !ok {
			// Config file was found but another error was produced
			log.Fatalf(err.Error(), "Error reading config file")
		}
	}

	config.SetEnvKeyReplacer(strings.NewReplacer("-", "_", ".", "_"))
	config.AutomaticEnv()

	return config
}

func Config() *viper.Viper {
	return config
}

type DatabaseConfig struct {
	Host     string `mapstructure:"host"`
	Username string `mapstructure:"username"`
	Password string `mapstructure:"password"`
	Database string `mapstructure:"database"`
	Port     int    `mapstructure:"port"`
	Conn     Conn   `mapstructure:"conn"`
}

type Conn struct {
	Min      int    `mapstructure:"min"`
	Max      int    `mapstructure:"max"`
	Lifetime string `mapstructure:"lifetime"`
	IdleTime string `mapstructure:"idletime"`
}

func GetDatabaseConfig() DatabaseConfig {
	dbConfig := DatabaseConfig{}
	config.UnmarshalKey("database", &dbConfig)
	return dbConfig
}
