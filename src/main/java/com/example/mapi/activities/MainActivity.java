package com.example.mapi.activities;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Button;
import android.widget.ProgressBar;

import com.example.mapi.R;

import org.rajawali3d.view.SurfaceView;


public class MainActivity extends AppCompatActivity {

    private SurfaceView mSurfaceView;
    private ProgressBar mProgressBar;
    private Button btnFloor1, btnFloor2, btnFloor3;
    private Button btnLogout;
    private Button btnRotateX, btnRotateY, btnRotateZ;
    private int currentFloor = 1;
    private MyRenderer renderer;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mProgressBar = findViewById(R.id.progress_bar);
        //Botones
        btnFloor1 = findViewById(R.id.btn_floor_1);
        btnFloor2 = findViewById(R.id.btn_floor_2);
        btnFloor3 = findViewById(R.id.btn_floor_3);

        btnRotateX = findViewById(R.id.btn_rotate_x);
        //btnRotateY = findViewById(R.id.btn_rotate_y);
        btnRotateZ = findViewById(R.id.btn_rotate_z);

        btnLogout = findViewById(R.id.btn_logout);

        showLoadingMessage();

        //Renderizado
        mSurfaceView = findViewById(R.id.rajawali_surface);
        mSurfaceView.setFrameRate(30.0);
        renderer = new MyRenderer(this, currentFloor);
        mSurfaceView.setSurfaceRenderer(renderer);

        setListeners();

    }

    private void setListeners(){

        btnLogout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                logout();
            }
        });

        // Set click listeners for the floor buttons
        btnFloor1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(currentFloor != 1) {
                    renderer.switchFloor(1);
                    currentFloor = 1;
                }
            }
        });

        btnFloor2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(currentFloor != 2) {
                    renderer.switchFloor(2);
                    currentFloor = 2;
                }
            }
        });


        btnFloor3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(currentFloor != 3) {
                    renderer.switchFloor(3);
                    currentFloor = 3;
                }
            }
        });

        btnRotateX.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //renderer.rotateCamera(0, 15, 0);
                renderer.zoomCamera(-1);
            }
        });



        btnRotateZ.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //renderer.rotateCamera(15, 15, 15);
                renderer.zoomCamera(1);
            }
        });

    }

    private void showLoadingMessage() {
        mProgressBar.setVisibility(View.VISIBLE);
    }

    private void hideLoadingMessage() {
        mProgressBar.setVisibility(View.GONE);
    }

    private void logout() {
        Intent intent = new Intent(getApplicationContext(), SignInActivity.class);
        startActivity(intent);
    }


    @Override
    public boolean onTouchEvent(MotionEvent event) {
        renderer.onTouchEvent(event);
        return true;
    }

    // Para eventos de ratón
    @Override
    public boolean onGenericMotionEvent(MotionEvent event) {
        renderer.onTouchEvent(event);
        return true;
    }
}



