<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Property;

class PropertySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void {
        $this->clearPictures();

        Property::factory()
            ->count(6)
            ->create();
    }

    public function clearPictures() {
        $folderPath = base_path().'/public/fileupload/property';

        $allowedExtensions = ['jpg', 'png', 'gif']; 

        if ($handle = opendir($folderPath)) {
            while (false !== ($file = readdir($handle))) {
                if (is_file($folderPath . '/' . $file) && in_array(pathinfo($file, PATHINFO_EXTENSION), $allowedExtensions)) {
                    unlink($folderPath . '/' . $file);
                }
            }
            closedir($handle);
        }
    }
}
