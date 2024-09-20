package config

import (
	"fmt"

	"github.com/Kanyapron/entity"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}

func ConnectionDB() {
	database, err := gorm.Open(sqlite.Open("db_song_thor_sut.db?cache=shared"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	fmt.Println("connected database")
	db = database
}

func SetupDatabase() {

	if db == nil {
		panic("database not connected")
	}
	
	db.AutoMigrate(&entity.Member{},)

	User := &entity.Member{
		Username: "Varoniga",
		Password: "V1234",
		Email: "varoniga.c@gmail.com",      
		FirstName: "Varoniga",
		LastName: "Leclerc",   
		PhoneNumber: "0977777777",
		Address: "33/4 บางพลี สมุทรปราการ 10540",   
		ProfilePic:   "",

	}
	db.FirstOrCreate(User, &entity.Member{
		Email: "varoniga.c@gmail.com",
	})

}