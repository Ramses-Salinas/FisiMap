package com.example.mapi.activities;

import android.app.Activity;
import android.content.Context;
import android.util.Log;
import android.view.MotionEvent;

import com.example.mapi.R;

import org.rajawali3d.Object3D;
import org.rajawali3d.lights.DirectionalLight;

import org.rajawali3d.loader.LoaderOBJ;
import org.rajawali3d.materials.Material;
import org.rajawali3d.materials.methods.DiffuseMethod;
import org.rajawali3d.materials.textures.ATexture;
import org.rajawali3d.materials.textures.Texture;
import org.rajawali3d.math.vector.Vector3;
import org.rajawali3d.renderer.Renderer;
import org.rajawali3d.cameras.ArcballCamera;

public class MyRenderer extends Renderer {
    private Object3D mModel;
    private Context context;
    private DirectionalLight mDirectionalLight;
    private ArcballCamera arcballCamera;
    private int currentFloor;
    private  Material material,material2,material3;
    private float mLastTouchX, mLastTouchY;

    public MyRenderer(Context context, int floor) {
        super(context);
        this.context = context;
        setFrameRate(30);
        this.currentFloor = floor;
    }

    @Override
    protected void initScene() {

        arcballCamera = new ArcballCamera(mContext, ((Activity) mContext).findViewById(R.id.rajawali_surface));
        arcballCamera.setPosition(0, 0, 16.0f);
        getCurrentScene().replaceAndSwitchCamera(getCurrentCamera(), arcballCamera);

        //Iluminación
        mDirectionalLight = new DirectionalLight(1f, .2f, -1.0f);
        mDirectionalLight.setColor(1.0f, 1.0f, 1.0f);
        mDirectionalLight.setPower(2);
        getCurrentScene().addLight(mDirectionalLight);

        // Piso1
        material = new Material();
        material.enableLighting(true);
        material.setDiffuseMethod(new DiffuseMethod.Lambert());
        material.setColorInfluence(0);
        Texture texture = new Texture("text", R.raw.piso1_fisi_finalt); //Textura
        try{
            material.addTexture(texture);

        } catch (ATexture.TextureException error){
            Log.d( ".initScene", error.toString());
        }

        // Piso2
        material2 = new Material();
        material2.enableLighting(true);
        material2.setDiffuseMethod(new DiffuseMethod.Lambert());
        material2.setColorInfluence(0);
        Texture texture2 = new Texture("text", R.raw.piso1_fisi_finalt); //Textura
        try{
            material2.addTexture(texture2);

        } catch (ATexture.TextureException error){
            Log.d( ".initScene", error.toString());
        }

        // Piso3
        material3 = new Material();
        material3.enableLighting(true);
        material3.setDiffuseMethod(new DiffuseMethod.Lambert());
        material3.setColorInfluence(0);
        Texture texture3 = new Texture("text", R.raw.piso3_fisi_finalt); //Textura
        try{
            material3.addTexture(texture3);

        } catch (ATexture.TextureException error){
            Log.d( ".initScene", error.toString());
        }

        loadModel(1);

    }

    public void switchFloor(int floor) {
        // Clear the current scene before loading the new model
        getCurrentScene().clearChildren();

        loadModel(floor);

        // Update the current floor
        currentFloor = floor;
    }

    private void loadModel(int floor) {
        LoaderOBJ objParser;
        switch (floor) {
            case 1:
                objParser = new LoaderOBJ(mContext.getResources(), mTextureManager, R.raw.piso1_fisi_final);
                try {
                    objParser.parse();
                    mModel = objParser.getParsedObject();
                    mModel.setScale(0.1f);
                    mModel.setMaterial(material);

                } catch (Exception e) {
                    e.printStackTrace();
                    // Ocurrió un error durante la carga del modelo (Mostrar error)
                    Log.e("Model", "Error al cargar el modelo: " + e.getMessage());
                }
                break;
            case 2:
                objParser = new LoaderOBJ(mContext.getResources(), mTextureManager, R.raw.piso2_fisi_final);
                try {
                    objParser.parse();
                    mModel = objParser.getParsedObject();
                    mModel.setScale(0.1f);
                    mModel.setMaterial(material2);

                } catch (Exception e) {
                    e.printStackTrace();
                    // Ocurrió un error durante la carga del modelo (Mostrar error)
                    Log.e("Model", "Error al cargar el modelo: " + e.getMessage());
                }
                break;
            case 3:
                objParser = new LoaderOBJ(mContext.getResources(), mTextureManager, R.raw.piso3_fisi_final);
                try {
                    objParser.parse();
                    mModel = objParser.getParsedObject();
                    mModel.setScale(0.1f);
                    mModel.setMaterial(material3);

                } catch (Exception e) {
                    e.printStackTrace();
                    // Ocurrió un error durante la carga del modelo (Mostrar error)
                    Log.e("Model", "Error al cargar el modelo: " + e.getMessage());
                }
                break;
            default:
                // Use a default model if the floor is not recognized
                objParser = new LoaderOBJ(mContext.getResources(), mTextureManager, R.raw.piso1_fisimm);
        }


        getCurrentScene().addChild(mModel);
        getCurrentCamera().setZ(16.0f);

    }

    public void rotateCamera(float rotateX, float rotateY, float rotateZ) {
        // Actualizar los valores de rotación en los tres ejes
        mModel.rotate(Vector3.Axis.X, rotateX);
        mModel.rotate(Vector3.Axis.Y, rotateY);
        mModel.rotate(Vector3.Axis.Z, rotateZ);
    }

    public void zoomCamera(int n){
        getCurrentCamera().setZ(getCurrentCamera().getZ() + n);
    }


    @Override
    public void onRender(final long elapsedTime, final double deltaTime) {
        // Aquí puedes realizar animaciones o interacciones con el modelo si es necesario
        super.onRender(elapsedTime, deltaTime);

    }

    @Override
    public void onOffsetsChanged(float xOffset, float yOffset, float xOffsetStep, float yOffsetStep, int xPixelOffset, int yPixelOffset) {

    }

    @Override
    public void onTouchEvent(MotionEvent event) {

        float x = event.getX();
        float y = event.getY();

        switch (event.getAction()) {
            case MotionEvent.ACTION_DOWN:
                // Se registra el punto de inicio del toque
                mLastTouchX = x;
                mLastTouchY = y;
                break;
            case MotionEvent.ACTION_MOVE:
                // Calcula la diferencia de desplazamiento en X y Y
                float deltaX = x - mLastTouchX;
                float deltaY = y - mLastTouchY;

                arcballCamera.setPosition(arcballCamera.getPosition().x - deltaX * 0.1f,
                        arcballCamera.getPosition().y + deltaY * 0.1f,
                        arcballCamera.getPosition().z);


                // Actualiza el último punto de contacto para el siguiente movimiento
                mLastTouchX = x;
                mLastTouchY = y;
                break;
        }

    }

}